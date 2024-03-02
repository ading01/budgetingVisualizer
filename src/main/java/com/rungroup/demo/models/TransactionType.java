package com.rungroup.demo.models;

import lombok.*;
import jakarta.persistence.*;
import java.util.Set;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "transaction_types")
public class TransactionType {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long transactionTypeId;

    private String name;
    private String nickname;

    @OneToMany(mappedBy = "transactionType", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private Set<Category> categories;
}
