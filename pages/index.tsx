import PageLayout from '../components/Layout/PageLayout'
import Logo from '../components/Logo/Logo'
import Menu from '../components/Menu/Menu'
import Button from '../components/Button/Button'
import Input from '../components/Inputs/Input'
import Heading from '../components/Typography/Heading'
import Card from '../components/Card/Card'

function HomePage() {
  const menuItems = [
    { href: '/', icon: 'inbox', title: 'Sign out' },
    { href: '/asfaf', icon: 'inbox' },
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
      <p>
Aliquam erat volutpat. Aenean ornare eget eros at ultrices. Integer accumsan gravida enim, vel vestibulum ligula interdum eu. Sed enim felis, congue pretium lacus eu, bibendum hendrerit ante. Nunc ultricies quis risus ut efficitur. Nullam sed leo et mauris viverra bibendum nec ac diam. Nam a nulla accumsan ipsum cursus faucibus. Fusce vehicula libero et est ornare, ac efficitur turpis porttitor. Sed posuere enim libero, ac varius nunc rhoncus et. In et mauris justo.
      </p>

      <Input
        label="Title"
        placeholder="Enter lorem here..."
      />

      <br />
      <Button buttonType="primary" buttonSize="large">Lorem ipsum</Button>

      <Card.Container>
        <Card.Section sectionBorders={['left']}>
          <Card.Header title="Lorem ipsum dolor">
            something
          </Card.Header>
        </Card.Section>
      </Card.Container>

    </PageLayout.Main>
  </PageLayout.Container>
}

export default HomePage