$(function () {
    
    (function(){
        var fillRedmineList = function(id, list){
            $.each(list, function (index, str_id_and_text) {
                var tmp = str_id_and_text.split(" ");
                var redmine_id = tmp.shift();
                var name = tmp.join(" ");
                
                var link = $("<a></a>");
                link.attr("href", "https://redmine.renuo.ch/issues/" + redmine_id);
                link.text(name);
                $("#" + id).append($("<li></li>").append(redmine_id + ": ").append(link));
            });
        };
        
        fillRedmineList("redmine_issues", [
            "1339 Wöchentliche Meetings", 
            "1592 Büro",
            "789 Admin",
            "1545 Agricircle",
            "768 Kundenaquise",
            "1832 Code Reviews",
            "2484 Bewerbungen",
            "2269 Praktikanten",
            "2838 Server Admin",
            "2839 SSL",
            "3704 Weekly Planning & Retro",
            "3705 Daily Standup",
            "3421 Training / Events / Vorträge"
        ]);
    })();
    
    
    (function(){
        var fillList = function(id, list){
            $.each(list, function (name, href) {
                var link = $("<a></a>");
                if (href.indexOf("://") == -1) href = "https://" + href;
                link.attr("href", href);
                link.text(name);
                $("#" + id).append($("<li></li>").append(link));
            });
        };
    
        fillList("redmine", {
            "Renuo":"redmine.renuo.ch",
            "My Tickets":"redmine.renuo.ch/issues?query_id=14",
            "Studentbooks":"redmine-studentbooks.renuo.ch",
            "Luke's Tickets":"redmine.renuo.ch/issues?query_id=21",
            "Wiki":"redmine.renuo.ch/projects/internal/wiki"
        });
    
        fillList("meetings", {
            "Sitzungsprotokoll": "docs.google.com/a/renuo.ch/document/d/1Y7g28aGsVW_r_yqWDgkUl8LpA4y-9OEzjStGy7TObyU/edit",
            "Redmine Stunden": "redmine.renuo.ch/time_entries/report?utf8=%E2%9C%93&criteria%5B%5D=project&criteria%5B%5D=user&criteria%5B%5D=issue&f%5B%5D=spent_on&op%5Bspent_on%5D=%3E%3Ct-&v%5Bspent_on%5D%5B%5D=7&f%5B%5D=&c%5B%5D=project&c%5B%5D=spent_on&c%5B%5D=user&c%5B%5D=activity&c%5B%5D=issue&c%5B%5D=comments&c%5B%5D=hours&columns=week",
            "Float": "renuo.floatschedule.com"
        });
        
        fillList("hotfeet", {
            "Wiki": "redmine.renuo.ch/projects/internal/wiki/HotFeet",
            "Jira": "jira.hotfeet.ch",
            "Ldap": "ldap.hotfeet.ch",
            "Ldap Doku": "docs.google.com/presentation/d/1_WY3MeUFXCbjbiE4d84MyjddFq6qRfpdJZXBYztWTJE/edit#slide=id.p",
            "Git": "git.hotfeet.ch",
            "SSH Devel": "ssh://devel.hotfeet.ch",
        });
    })();
    
    $("#current_year").text(new Date().getUTCFullYear());
});
