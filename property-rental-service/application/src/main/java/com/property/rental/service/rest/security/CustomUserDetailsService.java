package com.property.rental.service.rest.security;

import com.property.rental.service.common.enity.UserAccountEntity;
import com.property.rental.service.core.api.db.UserAccountRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.stream.Collectors;

@Service
public class CustomUserDetailsService implements UserDetailsService {

        @Autowired
        private UserAccountRepo userAccountRepo;

        @Override
        public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
                UserAccountEntity user = userAccountRepo.findByEmail(email)
                                .orElseThrow(() -> new UsernameNotFoundException(
                                                "User not found with email: " + email));

                return User.builder()
                                .username(user.getEmail())
                                .password(user.getPassword())
                                .authorities(user.getRoles().stream()
                                                .map(SimpleGrantedAuthority::new)
                                                .collect(Collectors.toList()))
                                .accountExpired(false)
                                .accountLocked(false)
                                .credentialsExpired(false)
                                .disabled(!user.isEnabled())
                                .build();
        }
}
