export const RegisterationPublicResource = ({
  componenet: Component,
  layout: Layout,
  ...rest
}) => {
  return (
    <Layout>
      <Component {...rest} />
    </Layout>
  );
};
