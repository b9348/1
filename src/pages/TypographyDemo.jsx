import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  H1, 
  H2, 
  H3, 
  H4, 
  P, 
  Lead, 
  Large, 
  Small, 
  Muted, 
  Blockquote, 
  InlineCode,
  List,
  ListItem 
} from '@/components/ui/typography';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';

const TypographyDemo = () => {
  return (
    <div className="content">
      <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
        <div className="text-center space-y-4">
          <H1>Typography 组件演示</H1>
          <Lead>展示所有可用的排版组件和样式</Lead>
          <div className="flex gap-2 justify-center">
            <Badge>shadcn/ui</Badge>
            <Badge variant="secondary">Typography</Badge>
          </div>
        </div>

        <Separator />

        <Card>
          <CardHeader>
            <CardTitle>标题组件</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <H1>H1 - 主标题</H1>
              <Muted>text-4xl font-extrabold tracking-tight lg:text-5xl</Muted>
            </div>
            <div>
              <H2>H2 - 二级标题</H2>
              <Muted>text-3xl font-semibold tracking-tight</Muted>
            </div>
            <div>
              <H3>H3 - 三级标题</H3>
              <Muted>text-2xl font-semibold tracking-tight</Muted>
            </div>
            <div>
              <H4>H4 - 四级标题</H4>
              <Muted>text-xl font-semibold tracking-tight</Muted>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>文本组件</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Lead>Lead - 引导文本</Lead>
              <Muted>用于重要的副标题或引导性文字</Muted>
            </div>
            <div>
              <P>P - 段落文本。这是一个标准的段落组件，具有适当的行高和间距。</P>
              <Muted>leading-7 [&:not(:first-child)]:mt-6</Muted>
            </div>
            <div>
              <Large>Large - 大号文本</Large>
              <Muted>text-lg font-semibold</Muted>
            </div>
            <div>
              <Small>Small - 小号文本</Small>
              <Muted>text-sm font-medium leading-none</Muted>
            </div>
            <div>
              <Muted>Muted - 弱化文本</Muted>
              <Muted>text-sm text-muted-foreground</Muted>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>特殊组件</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Blockquote>
                Blockquote - 引用块。用于引用他人的话语或重要的引述内容。
              </Blockquote>
              <Muted>mt-6 border-l-2 pl-6 italic</Muted>
            </div>
            <div>
              <P>
                InlineCode - 行内代码：<InlineCode>const hello = "world"</InlineCode>
              </P>
              <Muted>relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm</Muted>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>列表组件</CardTitle>
          </CardHeader>
          <CardContent>
            <List>
              <ListItem>第一项 - 使用 List 和 ListItem 组件</ListItem>
              <ListItem>第二项 - 自动应用列表样式</ListItem>
              <ListItem>第三项 - 支持嵌套和自定义样式</ListItem>
              <ListItem>第四项 - 完全可定制</ListItem>
            </List>
            <Muted className="mt-4">my-6 ml-6 list-disc</Muted>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>组合使用示例</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <H3>产品介绍</H3>
            <Lead>一款革命性的产品</Lead>
            <P>
              这是一个完整的产品介绍示例，展示了如何组合使用不同的排版组件。
              我们可以使用 <InlineCode>InlineCode</InlineCode> 来突出显示代码或关键词。
            </P>
            <Blockquote>
              "设计不仅仅是外观和感觉，设计是它如何工作。" - Steve Jobs
            </Blockquote>
            <H4>主要特性</H4>
            <List>
              <ListItem>响应式设计 - 适配所有设备</ListItem>
              <ListItem>暗色模式支持 - 自动切换主题</ListItem>
              <ListItem>无障碍访问 - 符合 WCAG 标准</ListItem>
              <ListItem>高性能 - 优化的渲染性能</ListItem>
            </List>
            <Separator className="my-4" />
            <div className="flex items-center gap-2">
              <Small>价格：</Small>
              <Large>¥99.00</Large>
              <Badge variant="secondary">限时优惠</Badge>
            </div>
          </CardContent>
        </Card>

        <div className="flex gap-4 justify-center pt-8">
          <Link to="/">
            <Button variant="outline">返回首页</Button>
          </Link>
          <Link to="/dashboard">
            <Button>前往仪表板</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TypographyDemo;

