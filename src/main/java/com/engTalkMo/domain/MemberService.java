package com.engTalkMo.domain;

import org.springframework.stereotype.Service;

public interface MemberService {
    Member save(MemberDto memberDto);
}
