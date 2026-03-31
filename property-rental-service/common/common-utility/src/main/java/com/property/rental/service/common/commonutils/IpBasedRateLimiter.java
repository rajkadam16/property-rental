package com.property.rental.service.common.commonutils;

import io.github.resilience4j.ratelimiter.RateLimiter;
import io.github.resilience4j.ratelimiter.RateLimiterConfig;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.time.Duration;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

@Component
public class IpBasedRateLimiter {

    private final Map<String, RateLimiter> limiters = new ConcurrentHashMap<>();
    private final RateLimiterConfig config;

    public IpBasedRateLimiter() {
        this.config = RateLimiterConfig.custom()
                .limitForPeriod(5)
                .limitRefreshPeriod(Duration.ofMinutes(15))
                .timeoutDuration(Duration.ZERO)
                .build();
    }

    public RateLimiter getRateLimiterForIp(String ip) {
        return limiters.computeIfAbsent(ip, key -> RateLimiter.of("login-" + key, config));
    }

    // Cleanup old limiters periodically
    @Scheduled(fixedRate = 3600000) // Every hour
    public void cleanup() {
        limiters.entrySet().removeIf(entry -> {
            RateLimiter limiter = entry.getValue();
            return limiter.getMetrics().getAvailablePermissions() == limiter.getRateLimiterConfig().getLimitForPeriod();
        });
    }
}