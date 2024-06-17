package org.project.ch07_2_server.domain.user.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.project.ch07_2_server.domain.user.controller.CardInfo;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

@Getter
@NoArgsConstructor
@Document(collection = "card")
public class Card {

  @Id
  private String id;
  @Indexed
  private String customId;
  private String uuid;
  private Writer writer;
  private String image;
  private String title;
  private String paragraphs;
  private String dayMonthYearDate;
  private String relativeDate;

  public Card(String id, String customId, String uuid, Writer writer, String image, String title, String paragraphs,
      String dayMonthYearDate, String relativeDate) {
    this.id = id;
    this.customId = customId;
    this.uuid = uuid;
    this.writer = writer;
    this.image = image;
    this.title = title;
    this.paragraphs = paragraphs;
    this.dayMonthYearDate = dayMonthYearDate;
    this.relativeDate = relativeDate;
  }

  public Card(CardInfo cardInfo) {
    this.customId = "1234";
    this.uuid = cardInfo.uuid();
    this.writer = Writer.create(cardInfo.writer());
    this.image = cardInfo.image();
    this.title = cardInfo.title();
    this.paragraphs = cardInfo.paragraphs();
    this.dayMonthYearDate = cardInfo.dayMonthYearDate();
    this.relativeDate = cardInfo.relativeDate();
  }

  public void changeInfo(CardInfo cardInfo) {
    this.uuid = cardInfo.uuid();
    this.writer = Writer.create(cardInfo.writer());
    this.image = cardInfo.image();
    this.title = cardInfo.title();
    this.paragraphs = cardInfo.paragraphs();
    this.dayMonthYearDate = cardInfo.dayMonthYearDate();
    this.relativeDate = cardInfo.relativeDate();
  }

  @Getter
  @AllArgsConstructor
  public static class Writer {

    private String uuid;
    private String name;
    private String jobTitle;
    private String email;
    private String avatar;

    private static Writer create(CardInfo.UserInfo userInfo) {
      return new Writer(userInfo.uuid(), userInfo.name(), userInfo.jobTitle(), userInfo.email(), userInfo.avatar());
    }
  }
}
