package org.launchcode.liftoff.recipeApp.controllers;

import org.launchcode.liftoff.recipeApp.models.Users;
import org.launchcode.liftoff.recipeApp.repositories.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.ObjectUtils;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("users")
public class UserAccountController {

    @Autowired
    private final UsersRepository usersRepository;

    public UserAccountController(UsersRepository usersRepository) {
        this.usersRepository = usersRepository;
    }

    @PostMapping
    public ResponseEntity signupForm(@RequestBody Users newUser){
        Users userInfo = usersRepository.findByUsername(newUser.getUsername());
        if(!ObjectUtils.isEmpty(userInfo)){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }else{
            usersRepository.save(newUser);
            return new ResponseEntity<>(HttpStatus.CREATED);
        }
    }
    @PostMapping(path = "/login")
    public ResponseEntity loginForm(@RequestBody Users loginUser) {
        Users userInfo = usersRepository.findByUsername(loginUser.getUsername());
        if (userInfo.getPassword().equals(userInfo.getPassword())) {
            return new ResponseEntity(HttpStatus.OK);
        }
        return new ResponseEntity(HttpStatus.INTERNAL_SERVER_ERROR);

    }

//    @GetMapping("/login")
//    public String showLoginForm(Users users){
//        return "userAccount/login";
//    }

    /* @PostMapping("/login_process")
    public String processLoginForm(@Valid Users loginUser){

        Users loginUsername = usersService.findByUsername((loginUser.getUsername()));

        if(loginUser.getPassword().equals(loginUsername.getPassword()) ){
            return "userAccount/userLogin";
        }
        return "userAccount/login";
    } */

}
