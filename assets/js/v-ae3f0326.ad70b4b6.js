"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[71977],{51641:(e,t,o)=>{o.r(t),o.d(t,{data:()=>a});const a={key:"v-ae3f0326",path:"/devices/SSM-U02.html",title:"Xiaomi SSM-U02 control via MQTT",lang:"en-US",frontmatter:{title:"Xiaomi SSM-U02 control via MQTT",description:"Integrate your Xiaomi SSM-U02 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2020-12-30T11:31:00.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Switch",slug:"switch",children:[]},{level:3,title:"Power_outage_memory (binary)",slug:"power-outage-memory-binary",children:[]},{level:3,title:"Switch_type (enum)",slug:"switch-type-enum",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/SSM-U02.md",git:{updatedTime:1649706053e3}}},34566:(e,t,o)=>{o.r(t),o.d(t,{default:()=>d});const a=(0,o(66252).uE)('<h1 id="xiaomi-ssm-u02" tabindex="-1"><a class="header-anchor" href="#xiaomi-ssm-u02" aria-hidden="true">#</a> Xiaomi SSM-U02</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>SSM-U02</td></tr><tr><td>Vendor</td><td>Xiaomi</td></tr><tr><td>Description</td><td>Aqara single switch module T1 (without neutral). Doesn&#39;t work as a router and doesn&#39;t support power meter</td></tr><tr><td>Exposes</td><td>switch (state), power_outage_memory, switch_type, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/SSM-U02.jpg" alt="Xiaomi SSM-U02"></td></tr></tbody></table><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="switch" tabindex="-1"><a class="header-anchor" href="#switch" aria-hidden="true">#</a> Switch</h3><p>The current state of this switch is in the published state under the <code>state</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</p><h3 id="power-outage-memory-binary" tabindex="-1"><a class="header-anchor" href="#power-outage-memory-binary" aria-hidden="true">#</a> Power_outage_memory (binary)</h3><p>Enable/disable the power outage memory, this recovers the on/off mode after power failure. Value can be found in the published state on the <code>power_outage_memory</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;power_outage_memory&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;power_outage_memory&quot;: NEW_VALUE}</code>. If value equals <code>true</code> power_outage_memory is ON, if <code>false</code> OFF.</p><h3 id="switch-type-enum" tabindex="-1"><a class="header-anchor" href="#switch-type-enum" aria-hidden="true">#</a> Switch_type (enum)</h3><p>Wall switch type. Value can be found in the published state on the <code>switch_type</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;switch_type&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;switch_type&quot;: NEW_VALUE}</code>. The possible values are: <code>toggle</code>, <code>momentary</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',11),i={},d=(0,o(83744).Z)(i,[["render",function(e,t){return a}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[o,a]of t)e[o]=a;return e}}}]);