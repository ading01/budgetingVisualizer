package com.rungroup.demo.services;

import com.rungroup.demo.dtos.ClubDto;

import java.util.List;

public interface ClubService {
    List<ClubDto> findAllClubs();
}
