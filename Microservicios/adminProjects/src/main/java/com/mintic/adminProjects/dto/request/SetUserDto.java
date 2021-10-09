
package com.mintic.adminProjects.dto.request;

import java.io.Serializable;
import org.bson.types.ObjectId;

public class SetUserDto implements Serializable {
    private String projectId;
    private String userId;

    public SetUserDto() {
    }

    public SetUserDto(String projectId, String userId) {
        this.projectId = projectId;
        this.userId = userId;
    }

    public String getProjectId() {
        return projectId;
    }

    public void setProjectId(String projectId) {
        this.projectId = projectId;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    
}
