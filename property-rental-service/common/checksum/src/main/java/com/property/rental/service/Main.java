package com.property.rental.service;

public class Main {
    public static void main(String[] args) {
        System.out.println("Hello world!");
        ChecksumApi checksumApi = new ChecksumApi();
        System.out.println("RR > "+ checksumApi.getChecksumApi());

    }
}