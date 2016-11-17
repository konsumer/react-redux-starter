import React from 'react'

import { success } from '../api/notification'


export default class Home extends React.Component {
  onNext (values) {
    this.props.history.push('/address')
  }

  render () {
    return (
      <div id='Home' className='container'>
        <h2>o hey!</h2>
        <p>This isn't super-exciting yet. You can make it more exciting by adding some new page-routes to index.js and/or editing pages/Home.js where this text you see is located.</p>
        <h3>Have fun!</h3>
        <p><button className='btn btn-primary' onClick={() => success('Hello!')}>click for hello</button></p>
        <div className='hipsum'><p>Plaid craft beer kogi chartreuse taxidermy fingerstache.  Poke seitan kombucha lumbersexual selfies.  Taxidermy raclette disrupt, actually polaroid jean shorts poutine deep v 8-bit semiotics cornhole.  You probably haven't heard of them deep v tofu, small batch health goth freegan literally listicle single-origin coffee kitsch readymade af green juice sriracha.  Lyft fam 8-bit sartorial, art party listicle distillery lumbersexual raw denim irony banh mi.  Aesthetic kale chips tilde, locavore try-hard distillery banjo.  Chia deep v kombucha, literally vinyl seitan schlitz migas.</p><p>Godard art party copper mug crucifix mixtape, normcore bushwick bicycle rights distillery pok pok yr tousled.  Paleo raw denim whatever vice tousled.  Hexagon scenester woke fam man bun.  Godard crucifix cronut hot chicken shabby chic.  Lo-fi master cleanse kitsch fingerstache, letterpress XOXO tumeric jean shorts enamel pin iceland live-edge messenger bag.  Hot chicken marfa squid unicorn pabst aesthetic.  Kinfolk gluten-free tumblr, austin messenger bag listicle echo park hella disrupt glossier fixie fanny pack.</p><p>Hell of kitsch +1, disrupt meditation humblebrag green juice echo park live-edge.  Semiotics authentic pitchfork venmo, paleo salvia sartorial tousled organic jean shorts intelligentsia VHS tilde.  Lomo pop-up whatever shoreditch, truffaut ugh yuccie pork belly pinterest.  Listicle four dollar toast poutine truffaut.  Try-hard kombucha cardigan, art party pinterest +1 echo park blog swag mumblecore cronut whatever.  Microdosing taxidermy everyday carry, next level forage bicycle rights vape photo booth street art schlitz dreamcatcher wayfarers neutra glossier jean shorts.  Truffaut prism narwhal cray, gluten-free chillwave polaroid chicharrones pitchfork.</p><p>Salvia deep v letterpress post-ironic, ugh lyft intelligentsia etsy hammock gluten-free jianbing mustache hot chicken cronut.  Readymade wolf plaid poke seitan.  Drinking vinegar readymade you probably haven't heard of them, selvage mumblecore woke lo-fi truffaut vape tacos brooklyn lyft.  Small batch mlkshk gastropub, deep v whatever organic crucifix craft beer plaid tote bag gochujang farm-to-table.  Hexagon paleo kickstarter waistcoat, franzen 3 wolf moon migas venmo hell of freegan whatever neutra health goth austin slow-carb.  Raw denim gluten-free mumblecore fanny pack brunch.  Woke squid beard cred tacos.</p></div>
      </div>
    )
  }
}
