package com.form.projectform.rest;

import com.form.projectform.entity.Entrepreneur;
import com.form.projectform.service.EntrepreneurService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.mail.MessagingException;
import java.io.UnsupportedEncodingException;
import java.util.List;

@RestController
@RequestMapping(path = "api/v1/registration")
@CrossOrigin("*")
public class EntrepreneurRestController {
@Autowired
    EntrepreneurService entrepreneurService;
//@GetMapping("/index")
//    public String viewHomePage(Model model){
//    List<Entrepreneur> entrepreneurList=entrepreneurService.findAllEntropreneurs();
//  if (CollectionUtils.isEmpty(entrepreneurList)) {
//        entrepreneurList= Arrays.asList(new Entrepreneur());
//    }
//
//  model.addAttribute("listEmp",entrepreneurList);
//    System.out.println("main controller");
//
//    return "index" ;
//}
//@GetMapping("/newEnp")
//    public ModelAndView addEmployee (@ModelAttribute Entrepreneur entrepreneur){
//Entrepreneur e=new Entrepreneur();
//    ModelAndView model=new ModelAndView("newEnp");
//    model.addObject(e);
//    return model;
//}
//    @GetMapping("/new")
//     String showNewFormulaire(Model model){
//model.addAttribute("user",new Entrepreneur());
//    return "new";
//    }

    @GetMapping("/entrepreneur")
    public List<Entrepreneur> findAll(){

        return entrepreneurService.findAllEntropreneurs();
    }

    @PostMapping("/save")
    public Entrepreneur saveEntrepreneur( @RequestBody Entrepreneur entrepreneur) throws MessagingException, UnsupportedEncodingException {
    entrepreneur.setId(0);
    entrepreneurService.saveEntrepreneur(entrepreneur);

    return entrepreneur;
    }

}





