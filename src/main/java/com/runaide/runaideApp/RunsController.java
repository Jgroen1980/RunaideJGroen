package com.runaide.runaideApp;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RunsController {
    //getmapping pakt deze url, deze locatie en return daarin het onderstaande
    @GetMapping("/api/hello")
    public String hello() {return "Hello, this is the runaide App";}
}
