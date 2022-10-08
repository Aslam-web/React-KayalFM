export const sidebarList = {
  "System Configuration": {
    menuName: "System Configuration",
    path: " ",
    accessTo: "BiCog",
    icon: "BiUserPin",
    submenu: [
      {
        menuName: "Admin List",
        path: "/admin/adminList",
        icon: "<AiFillAppstore/>",
      },
      {
        menuName: "Cluster List",
        path: "/admin/clusterList",
        icon: "<AiFillAppstore/>",
      },
      {
        menuName: "Cluster of Cluster List",
        path: "/admin/clusterOfClusterList",
        icon: "<AiFillAppstore/>",
      },
    ],
  },
  "User Management": {
    menuName: "User Management",
    path: " ",
    accessTo: "userAdmin",
    icon: "BiUserPin",
    submenu: [
      {
        menuName: "User List",
        path: "/admin/user",
        icon: "<AiFillAppstore/>",
      },
      {
        menuName: "User Performance",
        path: "/admin/userperformance",
        icon: "<AiFillAppstore/>",
      },
      {
        menuName: "Manage Sales User",
        path: "/admin/salesuser",
        icon: "<AiFillAppstore/>",
      },
      {
        menuName: "Sales Users Targets",
        path: "/admin/targetsetting",
        icon: "<AiFillAppstore/>",
      },
      {
        menuName: "Trade Partner Targets",
        path: "/admin/tradePartnerstargetSetting",
        icon: "<AiFillAppstore/>",
      },
    ],
  },
  "Audio Management": {
    menuName: "Audio Management",
    path: " ",
    accessTo: "audioAdmin",
    icon: "BiMicrophone",
    submenu: [
      {
        menuName: "Audio List",
        path: "/admin/audioadminmanagment/audiomanagment",
        icon: "<AiFillAppstore/>",
      },
      {
        menuName: "Audio Request Management",
        path: "/admin/audioRequestManagement",
        icon: "<AiFillAppstore/>",
      },
    ],
  },
  "Campaign Management": {
    menuName: "Campaign Management",
    path: " ",
    accessTo: "campaignAdmin",
    icon: "BiRadio",
    submenu: [
      {
        menuName: "Campaign List",
        path: "/admin/campaign",
        icon: "<AiFillAppstore/>",
      },
      {
        menuName: "Failed Campaign List",
        path: "/admin/failedcampaigns",
        icon: "<AiFillAppstore/>",
      },
      {
        menuName: "Deleted Campaign List",
        path: "/admin/deletedcampaigns",
        icon: "<AiFillAppstore/>",
      },
    ],
  },
  "Payment Management": {
    menuName: "Payment Management",
    path: " ",
    accessTo: "campaignAdmin",
    icon: "BiRupee",
    submenu: [
      {
        menuName: "Reconciliation List",
        path: "/admin/reconciliation",
        icon: "<AiFillAppstore/>",
      },
    ],
  },
  "Package Management": {
    menuName: "Package Management",
    path: " ",
    accessTo: "packageAdmin",
    icon: "BiPackage",
    submenu: [
      {
        menuName: "Manage Frequency package",
        path: "/admin/package/frequency",
        icon: "<AiFillAppstore/>",
      },
      {
        menuName: "Manage Day package",
        path: "/admin/package/day",
        icon: "<AiFillAppstore/>",
      },
      {
        menuName: "Manage Weekly/Weekend package",
        path: "/admin/package/budget",
        icon: "<AiFillAppstore/>",
      },
      {
        menuName: "Manage Base Discounts",
        path: "/admin/package/discounts",
        icon: "<AiFillAppstore/>",
      },
    ],
  },
  "Rate Management": {
    menuName: "Rate Management",
    path: " ",
    accessTo: "rateAdmin",
    icon: "BiRupee",
    submenu: [
      {
        menuName: "Rate Card",
        path: "/admin/rate-card",
        icon: "<AiFillAppstore/>",
      },
      {
        menuName: "Trade Partner Configuration",
        path: "/admin/dsaconf",
        icon: "<AiFillAppstore/>",
      },
    ],
  },

  "Contact Us": {
    menuName: "Contact Us",
    path: "",
    icon: "BiPhoneCall",
    submenu: [
      {
        menuName: "Contact List",
        path: "/admin/contact",
        icon: "<AiFillAppstore/>",
      },
      {
        menuName: "Splash Enquiry",
        path: "/admin/enquiry",
        icon: "<AiFillAppstore/>",
      },
      {
        menuName: "Lead performance",
        path: "/admin/leaddashboard",
        icon: "<AiFillAppstore/>",
      },
    ],
  },
  "Manage Coupons": {
    menuName: "Manage Coupons",
    path: " ",
    accessTo: "couponAdmin",
    icon: "BiBarcode",
    submenu: [
      {
        menuName: "Coupon List",
        path: "/admin/coupons",
        icon: "<AiFillAppstore/>",
      },
      {
        menuName: "Track Coupons",
        path: "/admin/trackcoupons",
        icon: "<AiFillAppstore/>",
      },
      {
        menuName: "Coupon Request",
        path: "/admin/requestcoupons",
        icon: "<AiFillAppstore/>",
      },
      {
        menuName: "NON FCT Codes",
        path: "/admin/nonfctcode",
        icon: "<AiFillAppstore/>",
      },
      {
        menuName: "NON FCT Code Request",
        path: "/admin/requestnonfctcode",
        icon: "<AiFillAppstore/>",
      },
    ],
  },
  "Trade Partner": {
    menuName: "Trade Partner",
    path: "",
    accessTo: "FinanceAdmin",
    icon: "BiGroup",
    submenu: [
      {
        menuName: "Active List",
        path: "/admin/tp",
        icon: "<AiFillAppstore/>",
      },
      {
        menuName: "Deleted List",
        path: "/admin/dsa-delete-request",
        icon: "<AiFillAppstore/>",
      },
      {
        menuName: "Campaign wise incentive",
        path: "/admin/incentives",
        icon: "<AiFillAppstore/>",
      },
      {
        menuName: "Pay out",
        path: "/admin/dsaincentives",
        icon: "<AiFillAppstore/>",
      },
    ],
  },
  "Incentive Management": {
    menuName: "Incentive Management",
    path: "",
    accessTo: "AuditAdmin",
    icon: "BiGroup",
    submenu: [
      {
        menuName: "Incentive List",
        path: "/admin/auditcampaigns",
        icon: "<AiFillAppstore/>",
      },
    ],
  },
  Coupons: {
    menuName: "Coupons",
    path: "",
    accessTo: "AuditAdmin",
    icon: "BiBarcode",
    submenu: [
      {
        menuName: "Coupon request",
        path: "/admin/couponrequest",
        icon: "<AiFillAppstore/>",
      },
      {
        menuName: "Non FCT Code request",
        path: "/admin/nonfctcoderequest",
        icon: "<AiFillAppstore/>",
      },
    ],
  },
  Notification: {
    menuName: "Notifications",
    path: "",
    accessTo: "AuditAdmin",
    icon: "BiBarcode",
    submenu: [
      {
        menuName: "Broadcast",
        path: "/admin/notification",
        icon: "<AiFillAppstore/>",
      },
      {
        menuName: "Broadcast History",
        path: "/admin/notificationlist",
        icon: "<AiFillAppstore/>",
      },
    ],
  },
  "Home page": {
    menuName: "Home page",
    path: "",
    accessTo: "Admin",
    icon: "BiHome",
    submenu: [
      {
        menuName: "Splash Screen",
        path: "/admin/splash_screen",
        icon: "<AiFillAppstore/>",
      },
    ],
  },
  Reports: {
    menuName: "Reports",
    path: "",
    accessTo: "Admin",
    icon: "BiCalendarEdit",
    submenu: [
      {
        accessTo: "Admin",
        menuName: "Offline Campaign",
        path: "/admin/offlinecampaignValidate",
        icon: "<AiFillAppstore/>",
      },
      {
        menuName: "Online vs Offline Sales",
        path: "/admin/sales-medium-report",
        icon: "<AiFillAppstore/>",
      },
      {
        menuName: "Sales Users Target Reports",
        path: "/admin/tva",
        icon: "<AiFillAppstore/>",
      },
      {
        menuName: "Trade Partners Target Reports",
        path: "/admin/TradePartnersReports",
        icon: "<AiFillAppstore/>",
      },
    ],
  }
};
