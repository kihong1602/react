package org.project.ch07_2_server.domain.user.controller;

import java.util.Objects;
import org.project.ch07_2_server.domain.user.domain.Card;
import org.project.ch07_2_server.domain.user.domain.Card.Writer;

public record CardInfo(
    String id,
    String uuid,
    UserInfo writer,
    String image,
    String title,
    String paragraphs,
    String dayMonthYearDate,
    String relativeDate
) {

  public static CardInfo convert(Card card) {
    if (Objects.isNull(card)) {
      return null;
    }
    UserInfo userInfo = UserInfo.create(card.getWriter());
    return new CardInfo(card.getId(), card.getUuid(), userInfo, card.getImage(), card.getTitle(), card.getParagraphs(),
        card.getDayMonthYearDate(), card.getRelativeDate());
  }

  public record UserInfo(
      String uuid,
      String name,
      String jobTitle,
      String email,
      String avatar
  ) {

    public static UserInfo create(Writer writer) {
      return new UserInfo(writer.getUuid(), writer.getName(), writer.getJobTitle(), writer.getEmail(),
          writer.getAvatar());
    }
  }
}
