module.exports = [
  {
    snippet_name: "Mode",
    language: "CSS",
    snippet: `.main-header {
    display: flex;
    justify-content: space-between;
    padding: 60px;
    background: #13293d;
    color: #fff;`,
  },
  {
    snippet_name: "Hash Password",
    language: "Javascript",
    snippet: `beforeCreate: async (newUserData) => {
    newUserData.password = await bcrypt.hash(newUserData.password, 10);
    return newUserData;`,
  },
];
