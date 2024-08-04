package com.property.rental.service;

public final class ValidationUtility {
    private ValidationUtility() {
    }

    public static boolean isStringValid(String input) {
        return input != null && input.length() > 0;
    }
}
