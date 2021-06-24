// 前端配置
export const frontEndConfig = [
  {
    label: "list.vue",
    children: [
      {
        label: "index.vue",
        value: "list.njk"
      },
      {
        label: "DataTable.vue",
        value: "DataTable.njk"
      }
    ]
  },
  {
    label: "edit.vue",
    children: [
      {
        label: "edit.vue",
        value: "edit.njk"
      },
      {
        label: "dialog-edit.vue",
        value: "dialog-edit.njk"
      }
    ]
  }
];

// 后端配置
export const backEndConfig = [
  {
    label: "Controller.php",
    value: "Controller.php"
  },
  {
    label: "Service.php",
    value: "Service.php"
  }
];
