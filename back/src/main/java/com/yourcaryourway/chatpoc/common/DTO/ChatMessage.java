package com.yourcaryourway.chatpoc.common.DTO;

import lombok.Data;

@Data
public class ChatMessage {
    private String authorId;
    private String content;
    private String timestamp;
}