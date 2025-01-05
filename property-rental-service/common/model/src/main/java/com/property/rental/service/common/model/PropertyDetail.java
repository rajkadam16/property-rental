/**
 * 
 */
package com.property.rental.service.common.model;

/**
 * 
 */
public class PropertyDetail {
	
	private String propertyID;
	private String propertyName;
	private String propertyAddress;
	private String propertyContact;
	private String propertyType;
	
	/**
	 * @return the propertyID
	 */
	public String getPropertyID() {
		return propertyID;
	}
	/**
	 * @param propertyID the propertyID to set
	 */
	public void setPropertyID(String propertyID) {
		this.propertyID = propertyID;
	}
	/**
	 * @return the propertyName
	 */
	public String getPropertyName() {
		return propertyName;
	}
	/**
	 * @param propertyName the propertyName to set
	 */
	public void setPropertyName(String propertyName) {
		this.propertyName = propertyName;
	}
	/**
	 * @return the propertyAddress
	 */
	public String getPropertyAddress() {
		return propertyAddress;
	}
	/**
	 * @param propertyAddress the propertyAddress to set
	 */
	public void setPropertyAddress(String propertyAddress) {
		this.propertyAddress = propertyAddress;
	}
	/**
	 * @return the propertyContact
	 */
	public String getPropertyContact() {
		return propertyContact;
	}
	/**
	 * @param propertyContact the propertyContact to set
	 */
	public void setPropertyContact(String propertyContact) {
		this.propertyContact = propertyContact;
	}
	/**
	 * @return the propertyType
	 */
	public String getPropertyType() {
		return propertyType;
	}
	/**
	 * @param propertyType the propertyType to set
	 */
	public void setPropertyType(String propertyType) {
		this.propertyType = propertyType;
	}
	
	@Override
	public String toString() {
		return "PropertyDetail [propertyID=" + propertyID + ", propertyName=" + propertyName + ", propertyAddress="
				+ propertyAddress + ", propertyContact=" + propertyContact + ", propertyType=" + propertyType + "]";
	}
	
	
	
}
