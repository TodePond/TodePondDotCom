export default {
  name: "todepond.com",
  admin: "TodePond",
  feed: "https://todepond-lablogingetusers.web.val.run",
};

export const config = {
  version: "0.0.1",
  instance_name: "todepond.com",
  instance_admin: "TodePond",
  endpoints: {
    update: "https://todepond-labloginupdatestatus.web.val.run",
    login: "https://todepond-lablogin.web.val.run",
    delete: "https://todepond-lablogindeleteaccount.web.val.run",
    ban: "https://todepond-labloginbanuser.web.val.run",
  },
  instances: [
    {
      name: "todepond.com",
      feed: "https://todepond-lablogingetusers.web.val.run",
      gifs: {
        berd: {
          src: "https://www.todepond.com/image/berd.gif",
          alt: "A sparkly bird gif",
        },
        bot: {
          src: "https://www.todepond.com/image/bot.gif",
          alt: "A sparkly robot gif",
        },
        tode: {
          src: "https://www.todepond.com/image/tode.gif",
          alt: "A sparkly toad gif",
        },
      },
    },
    {
      name: "svenlaa.com",
      feed: "https://svenlaa-lablogingetusers.web.val.run",
      // update: "https://svenlaa-labloginupdatestatus.web.val.run",
      // login: "https://svenlaa-lablogin.web.val.run",
      // delete: "https://svenlaa-lablogindeleteaccount.web.val.run",
      // ban: "https://svenlaa-labloginbanuser.web.val.run",
    },
    {
      name: "evolved.systems",
      feed: "https://evol-lablogingetusers.web.val.run",
      // update: "https://evol-labloginupdatestatus.web.val.run",
    },
    // {
    //   name: "rossilaz.xyz",
    //   feed: "https://mittzy-loginredux_getusers.web.val.run",
    // },
  ],
};
