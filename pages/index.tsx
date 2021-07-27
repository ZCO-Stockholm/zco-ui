import { useState } from 'react'
import PageLayout from '../components/Layout/PageLayout'
import Logo from '../components/Logo/Logo'
import Menu from '../components/Menu/Menu'
import Button from '../components/Button/Button'
import Input from '../components/Inputs/Input'
import Heading from '../components/Typography/Heading'
import Card from '../components/Card/Card'
import ModalSide from '../components/Modal/ModalSide'
import Paragraph from '../components/Typography/Paragraph'
import Spacer from '../components/Layout/Spacer'
import Justify from '../components/Layout/Justify'
import Label from '../components/Typography/Label'
import Message from '../components/Message/Message'

function HomePage() {
  const [modalActive, setModalActive] = useState(false)
  const menuItems = [
    { href: '/requests', icon: 'Archive', title: 'Open requests' },
    { href: '/asfaf', icon: 'CheckSquare', title: 'Closed requests' },
    { href: '/a', icon: 'LogOut', title: 'Sign out' },
  ]

  return <PageLayout.Container>
    <PageLayout.Sidebar>
      <Logo />
      <Menu
        items={menuItems}
      />
    </PageLayout.Sidebar>
    <PageLayout.Main>
      <Heading.Large>Lorem ipsum dolor sit amet</Heading.Large>
      <Heading.Medium>Lorem ipsum dolor sit amet</Heading.Medium>
      <Paragraph>
Aliquam erat volutpat. Aenean ornare eget eros at ultrices. Integer accumsan gravida enim, vel vestibulum ligula interdum eu. Sed enim felis, congue pretium lacus eu, bibendum hendrerit ante. Nunc ultricies quis risus ut efficitur. Nullam sed leo et mauris viverra bibendum nec ac diam. Nam a nulla accumsan ipsum cursus faucibus. Fusce vehicula libero et est ornare, ac efficitur turpis porttitor. Sed posuere enim libero, ac varius nunc rhoncus et. In et mauris justo.
      </Paragraph>

      <Input
        label="Title"
        placeholder="Enter lorem here..."
      />

      <br />
      <Button buttonType="primary" buttonSize="large" onClick={ev => setModalActive(!modalActive)}>
        Lorem ipsum
      </Button>
      <Message>Lorem ipsum dolor</Message>


    </PageLayout.Main>

    <ModalSide isActive={modalActive}>
      <Card.Container>
        <Card.Section sectionBorders={['bottom']}>
          <Card.Header title="Lorem ipsum dolor">
            <Button buttonType="secondary" buttonSize="medium">Close</Button>
            <Button buttonType="primary" buttonSize="medium">Save</Button>
          </Card.Header>
        </Card.Section>

        <Card.Section sectionBorders={['bottom', 'right']} sectionWidth="50%">
          <Spacer spaceVertical={20}>
            <Justify justifyContent="space-between">
              <Heading.Medium>Lorem ipsum dolor</Heading.Medium>
              <Label labelSize="medium" icon="Archive">Edit</Label>
            </Justify>
            <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nibh elit, malesuada et nulla placerat, auctor venenatis magna. Praesent quis tellus volutpat, consectetur velit at, vehicula diam. Phasellus tristique dolor purus, eget porttitor tellus finibus a. Suspendisse elementum mollis viverra.
            </Paragraph>
          </Spacer>
        </Card.Section>
        <Card.Section sectionBorders={['bottom']} sectionWidth="50%">
          B
        </Card.Section>
      </Card.Container>
    </ModalSide>
  </PageLayout.Container>
}

export default HomePage