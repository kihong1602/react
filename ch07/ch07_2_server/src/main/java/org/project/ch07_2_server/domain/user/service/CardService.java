package org.project.ch07_2_server.domain.user.service;

import java.util.List;
import lombok.RequiredArgsConstructor;
import org.project.ch07_2_server.domain.user.controller.CardInfo;
import org.project.ch07_2_server.domain.user.domain.Card;
import org.project.ch07_2_server.domain.user.domain.CardRepository;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CardService {

  private final CardRepository repository;

  public List<CardInfo> findAll() {
    List<Card> cards = repository.findAll();
    return cards.stream().map(CardInfo::convert).toList();
  }

  public CardInfo findById(String id) {
    Card card = repository.findByCustomId(id).orElse(null);
    return CardInfo.convert(card);
  }

  public CardInfo saveCard(CardInfo cardInfo) {
    repository.deleteAll();
    Card card = new Card(cardInfo);
    repository.save(card);
    return cardInfo;
  }

  public CardInfo putCard(String id, CardInfo cardInfo) {
    Card card = repository.findByCustomId(id).orElseThrow();
    card.changeInfo(cardInfo);
    repository.save(card);
    return CardInfo.convert(card);
  }

  public void deleteCard(String id) {
    repository.deleteByCustomId(id);
  }
}
