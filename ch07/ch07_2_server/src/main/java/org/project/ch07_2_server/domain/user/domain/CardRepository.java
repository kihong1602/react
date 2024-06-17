package org.project.ch07_2_server.domain.user.domain;

import java.util.Optional;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface CardRepository extends MongoRepository<Card, String> {

  Optional<Card> findByCustomId(String customId);

  void deleteByCustomId(String customId);
}
