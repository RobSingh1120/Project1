<?php

/* {# inline_template_start #}<a href="user/14/cancel?destination=/RND/RobinSingh/drupal-8.5.6/user-list-all"> Add deleeer</a>
 */
class __TwigTemplate_73888645c2f2afc2ff9520b3039df0b060b48f751869a54b55e6055f319cae07 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = array(
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $tags = array();
        $filters = array();
        $functions = array();

        try {
            $this->env->getExtension('Twig_Extension_Sandbox')->checkSecurity(
                array(),
                array(),
                array()
            );
        } catch (Twig_Sandbox_SecurityError $e) {
            $e->setSourceContext($this->getSourceContext());

            if ($e instanceof Twig_Sandbox_SecurityNotAllowedTagError && isset($tags[$e->getTagName()])) {
                $e->setTemplateLine($tags[$e->getTagName()]);
            } elseif ($e instanceof Twig_Sandbox_SecurityNotAllowedFilterError && isset($filters[$e->getFilterName()])) {
                $e->setTemplateLine($filters[$e->getFilterName()]);
            } elseif ($e instanceof Twig_Sandbox_SecurityNotAllowedFunctionError && isset($functions[$e->getFunctionName()])) {
                $e->setTemplateLine($functions[$e->getFunctionName()]);
            }

            throw $e;
        }

        // line 1
        echo "<a href=\"user/14/cancel?destination=/RND/RobinSingh/drupal-8.5.6/user-list-all\"> Add deleeer</a>
";
    }

    public function getTemplateName()
    {
        return "{# inline_template_start #}<a href=\"user/14/cancel?destination=/RND/RobinSingh/drupal-8.5.6/user-list-all\"> Add deleeer</a>
";
    }

    public function getDebugInfo()
    {
        return array (  44 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Twig_Source("", "{# inline_template_start #}<a href=\"user/14/cancel?destination=/RND/RobinSingh/drupal-8.5.6/user-list-all\"> Add deleeer</a>
", "");
    }
}
