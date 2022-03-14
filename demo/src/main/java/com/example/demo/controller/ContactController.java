package com.example.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class ContactController {

    @PostMapping("/save-email")
    @ResponseBody
    public String sendEmail(){

        return " svaed";
    }
    
}
