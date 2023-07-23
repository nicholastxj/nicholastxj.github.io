// Sidebar Data
export const SidebarData = [
  {
    icon: <i class="fa-solid fa-house" />,
    heading: "Dashboard",
    link: "/dashboard",
  },
  {
    icon: <i class="fa-solid fa-list-check" />,
    heading: "Task Manager",
    link: "/task-manager",
  },
  {
    icon: <i class="fa-solid fa-clock" />,
    heading: "Pomodoro Timer",
    link: "/pomodoro-timer",
  },
  {
    icon: <i class="fa-solid fa-people-group" />,
    heading: "Community",
    link: "/community",
  },
  {
    icon: <i class="fa-solid fa-user" />,
    heading: "Profile",
    link: "/profile",
  },
];

// Dashboard Cards Data
export const DashCardsData = [
  {
    title: "Tasks Done",
    color: {
      background: "linear-gradient(180deg, #c0d8f0 0%, #a5c5e8 100%)",
      boxShadow: "0px 10px 20px 0px #a5c5e8",
    },
    barValue: 100,
    value: "10",
    png: <i className="fa-solid fa-list-check" />,
  },
  {
    title: "Hours Focused",
    color: {
      background: "linear-gradient(180deg, #f5e1f0 0%, #e0c2f0 100%)",
      boxShadow: "0px 10px 20px 0px #e0c2f0",
    },
    barValue: 40,
    value: "27",
    png: <i className="fa-solid fa-clock" />,
  },
  {
    title: "Friends Added",
    color: {
      background: "linear-gradient(180deg, #c0e8f5 0%, #a5d5ec 100%)",
      boxShadow: "0px 10px 20px 0px #a5d5ec",
    },
    barValue: 0,
    value: "0",
    png: <i className="fa-solid fa-people-group" />,
  },
];

// Dashboard Updates Data
export const UpdatesData = [
  {
    img: "/images/cat-1.jpeg",
    name: "Darrell",
    text: "has finished sourcing tin cans",
    time: "2 hours ago",
  },
  {
    img: "/images/cat-2.jpeg",
    name: "Nicholas",
    text: "has finished studying for finals",
    time: "4 hours ago",
  },
  {
    img: "/images/garfield.webp",
    name: "Garfield",
    text: "has finished eating lasagna",
    time: "15 hours ago",
  },
];
