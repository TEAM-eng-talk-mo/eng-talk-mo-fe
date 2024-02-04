package com.engTalkMo.domain;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "member")
@Getter @NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Member {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String username;

    @Column(nullable = false)
    private String password;

    @Builder
    private Member(String username, String password) {
        this.username = username;
        this.password = password;
    }

    public static Member of(MemberDto memberDto) {
        return Member.builder()
                .username(memberDto.getUsername())
                .password(memberDto.getPassword())
                .build();
    }
}
