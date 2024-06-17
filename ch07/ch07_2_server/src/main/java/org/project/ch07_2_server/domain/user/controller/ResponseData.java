package org.project.ch07_2_server.domain.user.controller;

public record ResponseData(
    Boolean ok,
    Object body
) {

}
