import React from "react";
import { Link } from "react-router-dom";

const styles = {
  page: {
    display: "flex",
    height: "100vh",
    background: "#f9fbfd",
    fontFamily: "sans-serif",
  },
  sidebar: {
    width: "240px",
    background: "#fff",
    padding: "20px",
    boxShadow: "2px 0 4px rgba(0,0,0,0.05)",
    display: "flex",
    flexDirection: "column",
  },
  sidebarLogo: {
    fontSize: "22px",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "30px",
  },
  sidebarWelcome: {
    fontSize: "14px",
    color: "#666",
    marginBottom: "30px",
  },
  sidebarMenu: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  sidebarMenuItem: {
    padding: "10px 0",
    fontSize: "16px",
    color: "#333",
    textDecoration: "none",
    display: "block",
  },
  sidebarMenuItemActive: {
    backgroundColor: "#e4eeff",
    borderRadius: "6px",
    padding: "10px 12px",
    color: "#4a67ff",
  },
  header: {
    height: "60px",
    background: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 20px",
    boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
  },
  headerUser: {
    display: "flex",
    alignItems: "center",
    fontSize: "14px",
    color: "#444",
  },
  userAvatar: {
    width: "32px",
    height: "32px",
    borderRadius: "50%",
    background: "#ccc",
    marginLeft: "10px",
  },
  main: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },
  content: {
    padding: "20px",
    overflowY: "auto",
  },
  title: {
    fontSize: "32px",
    fontWeight: "700",
    color: "#1e2533",
    marginBottom: "20px",
  },
  cardGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill,minmax(200px,1fr))",
    gap: "20px",
  },
  card: {
    background: "#fff",
    borderRadius: "10px",
    padding: "20px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
  },
  cardTitle: {
    fontSize: "18px",
    fontWeight: "600",
    color: "#333",
    marginBottom: "10px",
  },
  cardDesc: {
    fontSize: "14px",
    color: "#666",
    marginBottom: "15px",
  },
  cardButton: {
    padding: "8px 12px",
    borderRadius: "6px",
    background: "#f0f5ff",
    color: "#4a67ff",
    fontSize: "14px",
    border: "none",
    cursor: "pointer",
  },
};

function Dashboard({ userEmail = "user@example.com" }) {
  const menuItems = ["Dashboard", "Reports", "Analytics", "Settings", "Support"];

  const cards = [
    { title: "Volok Calararing", desc: "Lorem ploin ip sg lool dolut eonau eor" },
    { title: "Wetons Dolp", desc: "Lorem ploin ip sg lool dolut eonau eor" },
    { title: "Reagnt Woms", desc: "Lorem ploin ip sg lool dolut eonau eor" },
    { title: "Maters Winipy", desc: "Lorem ploin ip sg lool dolut eonau eor" },
    { title: "Content Splow", desc: "Lorem ploin ip sg lool dolut eonau eor" },
    { title: "Wist Wing", desc: "Lorem ploin ip sg lool dolut eonau eor" },
  ];

  return (
    <div style={styles.page}>
      <aside style={styles.sidebar}>
        <div style={styles.sidebarLogo}>Logo</div>
        <div style={styles.sidebarWelcome}>
          Welcome, <br />
          {userEmail}
        </div>
        <ul style={styles.sidebarMenu}>
          {menuItems.map((item, idx) => (
            <li key={idx}>
              <Link
                to={`/${item.toLowerCase()}`}
                style={
                  item === "Dashboard"
                    ? { ...styles.sidebarMenuItem, ...styles.sidebarMenuItemActive }
                    : styles.sidebarMenuItem
                }
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </aside>

      <div style={styles.main}>
        <header style={styles.header}>
          <div />
          <div style={styles.headerUser}>
            User
            <div style={styles.userAvatar} />
          </div>
        </header>

        <div style={styles.content}>
          <h1 style={styles.title}>Welcome You</h1>

          <div style={styles.cardGrid}>
            {cards.map((c, i) => (
              <div key={i} style={styles.card}>
                <div style={styles.cardTitle}>{c.title}</div>
                <div style={styles.cardDesc}>{c.desc}</div>
                <button style={styles.cardButton}>Combina</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
