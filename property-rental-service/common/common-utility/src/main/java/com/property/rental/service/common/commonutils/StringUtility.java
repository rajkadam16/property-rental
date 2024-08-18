package com.property.rental.service.common.commonutils;

import java.util.UUID;

public final class StringUtility {
	
	private StringUtility() {}
	
	public static String generateNewUUID() {
		return UUID.randomUUID().toString();
	}

}
