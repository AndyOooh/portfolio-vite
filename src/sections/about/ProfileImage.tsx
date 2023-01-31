type Props = {
  children?: React.ReactNode;
  image: string;
  className?: string;
};

const ProfileImage = ({ children, image, className }: Props) => {
  return (
    <>
      <div className='inner-shad relative rounded-full flex-1 overflow-hidden h-full aspect-square'>
        <img src={image} alt='profile' className={className} />
        {children}
      </div>
    </>
  );
};

export default ProfileImage;
