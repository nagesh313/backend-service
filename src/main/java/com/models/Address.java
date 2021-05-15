package com.models;

import lombok.Data;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Data
@Entity
public class Address {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String firstname;
    private String lastname;
    private String addressLine1;
    private String addressLine2;
    private String city;
    private String StateProvinceRegion;
    private String zipcode;
    private String country;
    @ManyToOne(fetch = FetchType.LAZY)
    private User user;
}
