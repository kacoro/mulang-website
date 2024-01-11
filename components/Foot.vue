<template>
  <div>
    <footer id="footer" class="site-footer footer">
      <div class="container">
        <div class="footer__inner">
          <div class="footer__inner-top">
            <div class="footer__item">
              <span class="h6-title">Main line:</span>
              <a :herf="'tel:'+ contact.tel">{{ contact.tel }}</a>
            </div>
            <div class="footer__item">
              <span class="h6-title">Email:</span>
              <a href="mailto:frank.cai@metsen.com.cn">{{ contact.email }}</a>
            </div>
            <div class="footer__item footer__item-wide">
              <span class="h6-title">Company address:</span>
              <a href="https://www.google.com/maps/@22.5407312,114.1162581,17z/data=!3m1!4b1!4m10!1m2!2m1!1sRoom+1013,+Shenhua+Commercial+Building,+No.+2018,+Jiabin+Road,+Luohu+District,+Shenzhen!3m6!1s0x3403f595468fa6c3:0xf8c471d75df95f39!8m2!3d22.5407263!4d114.121129!15sCldSb29tIDEwMTMsIFNoZW5odWEgQ29tbWVyY2lhbCBCdWlsZGluZywgTm8uIDIwMTgsIEppYWJpbiBSb2FkLCBMdW9odSBEaXN0cmljdCwgU2hlbnpoZW6SARFjb21wb3VuZF9idWlsZGluZ-ABAA!16s%2Fg%2F12hq__xlz?entry=ttu"
                target="_blank">{{ contact.address }}</a>
            </div>
            <div class="footer__item">
              <span class="h6-title">Membership</span>
              <a href="https://www.jctrans.net/shophome/index-d60027c0250f4cbac59cb5fddfd98982.html" target="_blank">
                <img width="190" height="43" src="/metsen/images/jctrans.png" class="attachment-full size-full" alt=""
                  decoding="async" loading="lazy" title="Member ID:120709">
              </a>
            </div>
          </div>

          <div class="footer__inner-middle">
            <ul class="footer__socials">
              <li style="">
                <a href="https://www.facebook.com/metsen.supply.chain" target="_blank">
                  <span> <svg class="icon" aria-hidden="true">
                      <use xlink:href="#icon-FB"></use>
                    </svg></span>
                </a>
                <span>&nbsp;metsen.supply.chain</span>
              </li>
              <li style="padding-left:20px;">
                <a href="https://www.linkedin.com/company/metsen-56/" target="_blank">
                  <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-a-Frame1502"></use>
                  </svg>

                </a>
                <span>&nbsp;metsen-56</span>
              </li>
              <li v-html="site.copyright" style="justify-content: end;align-items: flex-start;flex-grow: 1;align-self: end;">
               </li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
   
  </div>
</template>
<script>
import { gql } from "graphql-request";
import getGraphqlClient from "~/utils/getGraphqlClient.js";
const query = gql`
 query{
  menuTree(identifier:"bottom"){
    title
  	link
    target
    id
    children{
      id
      title
      link
      target
      children
      	{
          id
          target
          title
          link
          children{
            id
            target
            title
            link
          }
        }
    }
  }
}
`;
export default {
  name: "foot",
  computed: {
    contact() {
      return this.$store.state.contact;
    },
    site() {
      return this.$store.state.site;
    },
    bottomMenu() {
      return this.$store.state.bottomMenu
    }
  },
  async fetch() {
    const { data, status } = await getGraphqlClient(this.$nuxt.context).rawRequest(
      query);
    // console.log(data)
    if (data.menuTree) {
      this.$store.commit('setBottomMenu', data.menuTree)
    }
  },
};
</script>