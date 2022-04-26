package com.app.api.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Activities {
    private int id;
    private int userId;
    private int taskId;
    private String title;
    
}
