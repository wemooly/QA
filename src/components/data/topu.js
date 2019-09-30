let arr1 = [
    { name: "访客", icon: "guest", x: 0, y: 2.5, disable: true },
    { name: "wan_pc", icon: "nginx", x: 1, y: 1 },
    { name: "nginx_40", icon: "nginx", x: 1, y: 4 },
    { name: "tomcat1_231", icon: "server", x: 2.5, y: 4 },
    { name: "tomcat1_232", icon: "server", x: 2.5, y: 3 },
    { name: "tomcat2_231", icon: "server", x: 2.5, y: 2 },
    { name: "tomcat2_232", icon: "server", x: 2.5, y: 1 },
    { name: "mysql_231", icon: "database", x: 4, y: 1 },
    { name: "mysql_232", icon: "database", x: 4, y: 4 }
  ];
  let arr2 = [
    { source: "mysql_231", target: "tomcat1_231", name: "传输" },
    { source: "mysql_231", target: "tomcat2_231", name: "传输" },
    { source: "mysql_231", target: "tomcat1_232", name: "传输" },
    { source: "mysql_231", target: "tomcat2_232", name: "传输" },
    { source: "mysql_232", target: "tomcat1_231", name: "传输" },
    { source: "mysql_232", target: "tomcat2_231", name: "传输" },
    { source: "mysql_232", target: "tomcat1_232", name: "传输" },
    { source: "mysql_232", target: "tomcat2_232", name: "传输" },
    { source: "tomcat1_231", target: "nginx_40", name: "响应" },
    { source: "tomcat2_231", target: "nginx_40", name: "响应" },
    { source: "tomcat1_232", target: "nginx_40", name: "响应" },
    { source: "tomcat2_232", target: "nginx_40", name: "响应" },
    { source: "tomcat1_231", target: "wan_pc", name: "响应" },
    { source: "tomcat2_231", target: "wan_pc", name: "响应" },
    { source: "tomcat1_232", target: "wan_pc", name: "响应" },
    { source: "tomcat2_232", target: "wan_pc", name: "响应" },
    { source: "nginx_40", target: "访客", name: "响应" },
    { source: "wan_pc", target: "访客", name: "响应" }
  ];