// Components
import { Container } from '../../components/container/container';
import { MarginBox } from '../../components/margin-box/margin-box';

// Hooks
import { useRouter } from 'next/router';

const TagPage = () => {
  const router = useRouter();
  const { tag } = router.query;

  return (
    <Container>
      <MarginBox bottom={5}>{tag}</MarginBox>
    </Container>
  );
};

export default TagPage;
