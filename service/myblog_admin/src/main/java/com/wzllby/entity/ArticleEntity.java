package com.wzllby.entity;

import java.util.Date;

/**
 * @author wzllby
 * @date 2023年02月04日 16:50
 */
public class ArticleEntity {
    private Integer id;

    private String articleName;

    private String articleClass;

    private Integer wordsNum;

    private String articleContent;

    private Integer articleType;

    private String articleCover;

    private boolean isTop;

    private boolean is_elite;

    private Integer post_format;

    private Integer state;

    private Integer hotNum;

    private Integer likesNum;

    private Integer visitorNum;

    private Date postTime;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getArticleName() {
        return articleName;
    }

    public void setArticleName(String articleName) {
        this.articleName = articleName;
    }

    public String getArticleClass() {
        return articleClass;
    }

    public void setArticleClass(String articleClass) {
        this.articleClass = articleClass;
    }

    public Integer getWordsNum() {
        return wordsNum;
    }

    public void setWordsNum(Integer wordsNum) {
        this.wordsNum = wordsNum;
    }

    public String getArticleContent() {
        return articleContent;
    }

    public void setArticleContent(String articleContent) {
        this.articleContent = articleContent;
    }

    public Integer getArticleType() {
        return articleType;
    }

    public void setArticleType(Integer articleType) {
        this.articleType = articleType;
    }

    public String getArticleCover() {
        return articleCover;
    }

    public void setArticleCover(String articleCover) {
        this.articleCover = articleCover;
    }

    public boolean isTop() {
        return isTop;
    }

    public void setTop(boolean top) {
        isTop = top;
    }

    public boolean isIs_elite() {
        return is_elite;
    }

    public void setIs_elite(boolean is_elite) {
        this.is_elite = is_elite;
    }

    public Integer getPost_format() {
        return post_format;
    }

    public void setPost_format(Integer post_format) {
        this.post_format = post_format;
    }

    public Integer getState() {
        return state;
    }

    public void setState(Integer state) {
        this.state = state;
    }

    public Integer getHotNum() {
        return hotNum;
    }

    public void setHotNum(Integer hotNum) {
        this.hotNum = hotNum;
    }

    public Integer getLikesNum() {
        return likesNum;
    }

    public void setLikesNum(Integer likesNum) {
        this.likesNum = likesNum;
    }

    public Integer getVisitorNum() {
        return visitorNum;
    }

    public void setVisitorNum(Integer visitorNum) {
        this.visitorNum = visitorNum;
    }

    public Date getPostTime() {
        return postTime;
    }

    public void setPostTime(Date postTime) {
        this.postTime = postTime;
    }
}
