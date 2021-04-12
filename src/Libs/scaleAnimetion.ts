import G6 from '@antv/g6';

export default function() {
  G6.registerNode(
    'scale-animation',
    {
      afterDraw(cfg, group) {
        const shape = group.get('children')[0];
        shape.animate(
          (ratio) => {
            const diff = ratio <= 0.5 ? ratio * 10 : (1 - ratio) * 10;
            return {
              r: cfg.size / 2 + diff,
            };
          },
          {
            repeat: true,
            duration: 2000,
            easing: 'easeCubic',
          },
        );
      },
    },
    'circle',
  );
}