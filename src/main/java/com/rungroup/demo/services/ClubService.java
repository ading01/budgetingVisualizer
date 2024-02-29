package com.rungroup.demo.services;

import com.rungroup.demo.dtos.ClubDto;
import com.rungroup.demo.models.Club;

import java.util.List;

public interface ClubService {
    List<ClubDto> findAllClubs();
    Club createClub(Club club);
}
