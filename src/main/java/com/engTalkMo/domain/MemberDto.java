package com.engTalkMo.domain;

import jakarta.validation.constraints.NotEmpty;
import lombok.Data;

@Data
public class MemberDto {

    @NotEmpty
    private String username;

    @NotEmpty
    private String password;
}
