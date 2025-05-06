import Link from "next/link";
import * as Base from "fumadocs-ui/components/codeblock";
import { highlight } from "fumadocs-core/highlight";
import { type HTMLAttributes } from "react";

export const metadata = {
  title: "Migraine",
  description: "Migraine CLI",
  image: "/mg_logo.png",
};

const codeExample = `# Install Migraine
brew install migraine

# Create a new workflow from a template
migraine workflow new

# Run a workflow with variables
migraine run my_workflow -v PROJECT_PATH=/path/to/project

# Execute specific actions
migraine run my_workflow -a deploy`;

export default async function HomePage() {
  const rendered = await highlight(codeExample, {
    lang: "bash",
    theme: "github-dark",
    components: {
      pre: (props) => <Base.Pre {...props} />,
    },
  });
  return (
    <main className="flex-1">
      <section className="container py-24 space-y-8 md:py-32">
        <div className="mx-auto max-w-[800px] space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Eliminate your workflow headaches
          </h1>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed">
            A powerful CLI tool designed to solve the chronic headache of
            managing complex development workflows.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 pt-4">
            <Link
              href="/docs"
              className="inline-flex max-w-[12.75rem] items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 rounded-md px-8"
            >
              View Documentation
            </Link>
          </div>
        </div>
      </section>
      <section id="demo" className="container py-12 md:py-24 border-t">
        <div className="mx-auto max-w-[800px] space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            See It In Action
          </h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground">
            Try editing the code below to see how simple it is to use Migraine.
          </p>
        </div>
        <div className="mx-auto max-w-[800px] flex-col">
          <Base.CodeBlock>{rendered}</Base.CodeBlock>
        </div>
      </section>
    </main>
  );
}
