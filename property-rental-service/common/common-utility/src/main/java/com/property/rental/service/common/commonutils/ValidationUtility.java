package com.property.rental.service.common.commonutils;

public final class ValidationUtility {
	private ValidationUtility() {
	}

	public static boolean isStringValid(String input) {
		return input != null && input.length() > 0;
	}
}
