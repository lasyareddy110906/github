GITHUB CODE COLLABORATIVE PLATFORM

# ENTITY:
    USER, REPOSITORIES, PROJECT FILES, COMMENTS, NOTIFICATIONS, COLLABORATORS, COMMITS, PULL REQUESTS, ISSUES

# SCHEMA:
    
    USER:
    - user_id
    - name
    - email 
    - password
    - isActive
    - userProfilePic
    - timestamp
    
    REPOSITORY:
    - repo_id
    - name
    - description
    - visibility
    - owner(user_id)
    - collaborator(model)
    - isActive
    - comments
    - createdBy(user_id, timestamps)

    FILES:
    - file_id
    - repository(repo_id)
    - name
    - editedFiles(commit model)
    - content(code)
    - createdBy(user_id)

    COMMENTS:
    - comment_id
    - user(user_id)
    - text
    - parent_type
    - parent_id
    - createdAt(timestamp)

    NOTIFICATIONS:
    - notification_id
    - timestamp
    - isSeen
    - type
    - user(user_id)
    - message

    COLLABORATOR:
    - collab_id
    - user(user_id)
    - repo(repo_id)
    - role(owner,collaborator,viewer)
    - addedAt(timestamp)

    COMMIT:
    - commit_id
    - repo_id
    - author(user_id)
    - message
    - changedFiles
    - createdAt(timestamps)

    PR:
    - pr_id
    - repo_id
    - title
    - description
    - createdBy(user_id,timestamp)
    - status(open,closed,merged)
    - commit(model)
    - reviewers(user)
    - createdAt(timestamp)
    
    ISSUES:
    - issue_id
    - repo_id
    - title
    - description
    - createdBy(user_id)
    - status(open,close)
    - assignees(user_id)
    - timestamp

    






