package com.rungroup.demo.services.impls;

import com.rungroup.demo.models.Transaction;
import com.rungroup.demo.repositories.TransactionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class TransactionService {

    private final TransactionRepository transactionRepository;

    @Autowired
    public TransactionService(TransactionRepository transactionRepository) {
        this.transactionRepository = transactionRepository;
    }

    public List<Transaction> getAllTransactions() {
        return transactionRepository.findAll();
    }

    public Transaction saveTransaction(Transaction transaction) {
        return transactionRepository.save(transaction);
    }

    public List<Transaction> getTransactionsByUserId(Long userId) {

        return transactionRepository.findByUserId(userId);

    }

    // Add more methods as needed, such as getById, delete, update, etc.
}


//package com.rungroup.demo.services.impls;
//
//import com.rungroup.demo.dtos.IncomeDTO;
//import com.rungroup.demo.models.Expense;
//import com.rungroup.demo.models.Income;
//import com.rungroup.demo.models.User;
//import com.rungroup.demo.repositories.ExpenseRepository;
//import com.rungroup.demo.repositories.IncomeRepository;
//import com.rungroup.demo.repositories.UserRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//import java.util.stream.Collectors;
//
//
//
//import java.util.List;
//import java.util.Optional;
//
//@Service
//public class TransactionService {
//
//    private final IncomeRepository incomeRepository;
//    private final UserRepository userRepository;
//
//    private final ExpenseRepository expenseRepository;
//
//    @Autowired
//    public TransactionService(IncomeRepository incomeRepository, UserRepository userRepository, ExpenseRepository expenseRepository) {
//        this.incomeRepository = incomeRepository;
//        this.userRepository = userRepository;
//        this.expenseRepository = expenseRepository;
//    }
//
//    public Income addIncomeForUser(Long userId, Income income) {
//        Optional<User> userOptional = userRepository.findById(userId);
//        if (!userOptional.isPresent()) {
//            throw new RuntimeException("User not found with id: " + userId);
//        }
//        User user = userOptional.get();
//        income.setUser(user);
//        return incomeRepository.save(income);
//    }
//
//    public Expense addExpenseForUser(Long userId, Expense expense) {
//        Optional<User> userOptional = userRepository.findById(userId);
//        if (!userOptional.isPresent()) {
//            throw new RuntimeException("User not found with id: " + userId);
//        }
//        User user = userOptional.get();
//        expense.setUser(user);
//        return expenseRepository.save(expense);
//    }
//
//    public List<IncomeDTO> getIncomesForUser(Long userId) {
//        List<Income> incomes = incomeRepository.findByUserId(userId);
//        return incomes.stream()
//                .map(income -> new IncomeDTO(
//                        income.getId(),
//                        income.getAmount(),
//                        income.getCategory(),
//                        income.getSubcategory(),
//                        income.getDescription(),
//                        income.getDate()))
//                .collect(Collectors.toList());
//    }
//
//
//
//}
