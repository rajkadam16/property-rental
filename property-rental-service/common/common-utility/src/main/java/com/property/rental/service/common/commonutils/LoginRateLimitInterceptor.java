package com.property.rental.service.common.commonutils;

import io.github.resilience4j.ratelimiter.RateLimiter;
import io.github.resilience4j.ratelimiter.RequestNotPermitted;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

@Component
public class LoginRateLimitInterceptor implements HandlerInterceptor {

    private static final Logger logger = LoggerFactory.getLogger(LoginRateLimitInterceptor.class);

    @Autowired
    private IpBasedRateLimiter ipBasedRateLimiter;

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
            throws Exception {
        // Only apply rate limiting to login endpoint
        if (!request.getRequestURI().contains("/account/login")) {
            return true;
        }

        String clientIp = getClientIp(request);
        logger.debug("Login attempt from IP: {}", clientIp);

        RateLimiter rateLimiter = ipBasedRateLimiter.getRateLimiterForIp(clientIp);

        try {
            // Try to acquire permission
            if (!rateLimiter.acquirePermission()) {
                logger.warn("Rate limit exceeded for IP: {}", clientIp);
                throw new RateLimitExceededException(
                        "Too many login attempts. Please try again later.",
                        900 // 15 minutes in seconds
                );
            }
            return true;
        } catch (RequestNotPermitted e) {
            logger.warn("Rate limit exceeded for IP: {}", clientIp);
            throw new RateLimitExceededException(
                    "Too many login attempts. Please try again later.",
                    900 // 15 minutes in seconds
            );
        }
    }

    /**
     * Extract client IP address from request, handling proxy scenarios
     */
    private String getClientIp(HttpServletRequest request) {
        String ip = request.getHeader("X-Forwarded-For");
        if (ip == null || ip.isEmpty() || "unknown".equalsIgnoreCase(ip)) {
            ip = request.getHeader("X-Real-IP");
        }
        if (ip == null || ip.isEmpty() || "unknown".equalsIgnoreCase(ip)) {
            ip = request.getRemoteAddr();
        }
        // Handle multiple IPs in X-Forwarded-For (take the first one)
        if (ip != null && ip.contains(",")) {
            ip = ip.split(",")[0].trim();
        }
        return ip != null ? ip : "unknown";
    }
}
