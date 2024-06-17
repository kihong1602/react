package org.project.ch07_2_server.domain.user.controller;

import java.util.List;
import lombok.RequiredArgsConstructor;
import org.project.ch07_2_server.domain.user.service.CardService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class CardController {

  private final CardService service;

  @GetMapping("/test")
  public ResponseEntity<ResponseData> findAll() {
    List<CardInfo> cardInfos = service.findAll();
    ResponseData responseData = new ResponseData(true, cardInfos);
    return ResponseEntity.ok(responseData);
  }

  @GetMapping("/test/{id}")
  public ResponseEntity<ResponseData> findById(@PathVariable String id) {
    CardInfo cardInfo = service.findById(id);
    ResponseData responseData = new ResponseData(true, cardInfo);
    return ResponseEntity.ok(responseData);
  }

  @PostMapping("/test")
  public ResponseEntity<ResponseData> saveCard(@RequestBody CardInfo cardInfo) {
    CardInfo result = service.saveCard(cardInfo);
    ResponseData responseData = new ResponseData(true, result);
    return ResponseEntity.ok(responseData);
  }

  @PutMapping("/test/{id}")
  public ResponseEntity<ResponseData> putCard(@PathVariable String id, @RequestBody CardInfo cardInfo) {
    CardInfo result = service.putCard(id, cardInfo);
    ResponseData responseData = new ResponseData(true, result);
    return ResponseEntity.ok(responseData);
  }

  @DeleteMapping("/test/{id}")
  public ResponseEntity<ResponseData> deleteCard(@PathVariable String id) {
    service.deleteCard(id);
    ResponseData responseData = new ResponseData(true, null);
    return ResponseEntity.ok(responseData);
  }
}
