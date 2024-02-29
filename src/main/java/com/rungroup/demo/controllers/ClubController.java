package com.rungroup.demo.controllers;

import com.rungroup.demo.dtos.ClubDto;
import com.rungroup.demo.models.Club;
import com.rungroup.demo.services.ClubService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
class ClubController {
    private ClubService clubService;

    @Autowired
    public ClubController(ClubService clubService) {
        this.clubService = clubService;
    }

    @GetMapping("/")
    public String listClubs(Model model) {
        List<ClubDto> clubs = clubService.findAllClubs();
        model.addAttribute("clubs", clubs);
        return "clubs-list";
    }

    @PostMapping
    public String createClub(@RequestBody Club club) {
        System.out.println("club " + club);
        clubService.createClub(club);
        return "redirect:/";
    }
}
