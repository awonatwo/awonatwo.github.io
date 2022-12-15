const pop = (id) => {
  const popup = open(`../img/trv/${id}.JPG`, "_blank");
  setTimeout(() => {
    popup.close();
  }, 5000);
};

const intpop = (id) => {
  const popup = open(`../img/introd/${id}.JPG`, "_blank");
  setTimeout(() => {
    popup.close();
  }, 5000);
};
