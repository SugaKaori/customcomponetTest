let base = '';
export const initBasePath = rootPath => {
    base = rootPath;
};

initBasePath(
    window.location.hostname !== 'localhost'
        ? 'http://dev-tyo-onaka3-alb-282579287.ap-northeast-1.elb.amazonaws.com'
        : 'http://localhost:3002'
);

export default relativePath => `${base}${relativePath}`;
